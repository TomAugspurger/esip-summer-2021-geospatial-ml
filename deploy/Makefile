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

group:
	az group create --name $(GROUP) --location $(LOCATION)

cluster:
	az aks create --resource-group $(GROUP) --name $(CLUSTER) --generate-ssh-keys \
		--node-count=1 \
		--nodepool-name core \
		--nodepool-labels hub.jupyter.org/node-purpose=core
	az aks get-credentials --name $(CLUSTER) --resource-group $(GROUP)

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
		--node-count=NODE_COUNT

clean:
	az group delete -n $(GROUP)