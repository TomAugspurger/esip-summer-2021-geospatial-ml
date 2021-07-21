.PHONY: group cluster hub clean storage

LOCATION?=westeurope
GROUP?=esip2021
CLUSTER?=pangeoCluster
STORAGE_ACCOUNT?=$(GROUP)
STORAGE_CONTAINER?=$(GROUP)
MAX_USER_NODE_COUNT?=60
MAX_WORKER_NODE_COUNT?=100
NODE_COUNT?=0
SUBSCRIPTION="Planetary Computer"

# nodegroup math: We have 100 attendees, we want 100 GPUs
# Doc pages
# NC4as_T4_v3: https://docs.microsoft.com/en-us/azure/virtual-machines/nct4-v3-series
# | SKU                             | Quota | CPU/GPU | Users
# | --------------------------------| ------| ------- | -----
# | Standard NC Family vCPUs        | 48    | 6       | 8
# | Standard NCASv3_T4 Family vCPUs | 128   | 4       | 32
# | Standard NCSv2 Family vCPUs     | 0/0   | 6       |
# | Standard NCSv3 Family vCPUs     | 0/0   | 6       |

# So we need 60 more. Or 30 NCSv2 + 30 NCSv3

group:
	az group create --name $(GROUP) --location $(LOCATION)

userpools:
	# NC4as_T4_v3
	az aks nodepool add --name gpumanual \
	    --cluster-name $(CLUSTER) \
	    --resource-group $(GROUP) \
	    --node-vm-size Standard_NC4as_T4_v3 \
	    --node-count 0 \
	    --aks-custom-headers UseGPUDedicatedVHD=true \
	    --labels hub.jupyter.org/node-purpose=user hub.jupyter.org/pool-name=user-alpha-pool computetype=gpu \
	    --node-taints "hub.jupyter.org_dedicated=user:NoSchedule"

	# Backup in case we don't get enough NCasT4
	# Standard_NC6
	az aks nodepool add --name ncgpuuser \
	    --cluster-name $(CLUSTER) \
	    --resource-group $(GROUP) \
	    --node-vm-size Standard_NC6 \
	    --node-count 0 \
	    --aks-custom-headers UseGPUDedicatedVHD=true \
	    --labels hub.jupyter.org/node-purpose=user hub.jupyter.org/pool-name=user-alpha-pool computetype=gpu \
	    --node-taints "hub.jupyter.org_dedicated=user:NoSchedule"

	# Add a node-pool: one for the users and Dask schedulers
	# az aks nodepool add \
	# 	--name cpumanual \
	# 	--cluster-name $(CLUSTER) \
	# 	--resource-group $(GROUP) \
	# 	--node-count 0 \
	# 	--node-vm-size Standard_D4s_v3 \
	# 	--labels hub.jupyter.org/node-purpose=user computetype=cpu

	# Add a node-pool: one for the users and Dask schedulers
	az aks nodepool add \
		--name users \
		--cluster-name $(CLUSTER) \
		--resource-group $(GROUP) \
		--node-count 0 \
		--node-vm-size Standard_D4s_v3 \
		--labels hub.jupyter.org/node-purpose=user computetype=cpu

cluster:
	az aks create --resource-group $(GROUP) --name $(CLUSTER) --generate-ssh-keys \
		--node-count=1 \
		--nodepool-name core \
		--nodepool-labels hub.jupyter.org/node-purpose=core
	az aks get-credentials --name $(CLUSTER) --resource-group $(GROUP)

storage:
	az storage account create \
		--name=$(STORAGE_ACCOUNT) \
		--resource-group=$(GROUP) \
		--location=$(LOCATION)
	az storage container create \
		--name=esip2021 \
		--account-name=$(STORAGE_CONTAINER) \
		--public-access blob

hub:
	helm upgrade --wait --install --create-namespace \
		dask dask/daskhub \
		--version=2021.7.0 \
		--namespace=dhub \
		--values=config.yaml \
		--values=secrets.yaml

scale:
	az aks nodepool scale \
		--name=gpumanual \
		--cluster-name=$(CLUSTER) \
		--resource-group=$(GROUP) \
		--node-count=8
	az aks nodepool scale \
		--name=ncgpuuser \
		--cluster-name=$(CLUSTER) \
		--resource-group=$(GROUP) \
		--node-count=32
	az aks nodepool scale \
		--name=cpumanual \
		--cluster-name=$(CLUSTER) \
		--resource-group=$(GROUP) \
		--node-count=60

ncscale:
	az aks nodepool scale \
		--name=ncgpuuser \
		--cluster-name=$(CLUSTER) \
		--resource-group=$(GROUP) \
		--node-count=$(NODE_COUNT)

clean:
	az group delete -n $(GROUP)