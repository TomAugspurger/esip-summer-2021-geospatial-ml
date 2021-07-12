.PHONY: group cluster hub clean storage

LOCATION?=westeurope
GROUP?=esip2021
CLUSTER?=pangeoCluster
STORAGE_ACCOUNT?=$(GROUP)
STORAGE_CONTAINER?=$(GROUP)
MAX_USER_NODE_COUNT?=60
MAX_WORKER_NODE_COUNT?=100


group:
	az group create --name $(GROUP) --location $(LOCATION)

cluster:
	az aks create --resource-group $(GROUP) --name $(CLUSTER) --generate-ssh-keys \
		--node-count=1 \
		--nodepool-name core \
		--nodepool-labels hub.jupyter.org/node-purpose=core

	# Add a node-pool: one for the users and Dask schedulers
	az aks nodepool add \
		--name users \
		--cluster-name $(CLUSTER) \
		--resource-group $(GROUP) \
		--enable-cluster-autoscaler \
		--node-count 1 \
		--min-count 0 --max-count $(MAX_USER_NODE_COUNT) \
		--node-vm-size Standard_D2s_v3 \
		--labels hub.jupyter.org/node-purpose=user

	# Add a node-pool for Dask workers.
	az aks nodepool add \
		--name workers \
		--cluster-name $(CLUSTER) \
		--resource-group $(GROUP) \
		--enable-cluster-autoscaler \
		--node-count 1 \
		--min-count 0 --max-count $(MAX_WORKER_NODE_COUNT) \
		--node-vm-size Standard_D2s_v3 \
		--priority Spot \
		--eviction-policy Delete \
		--spot-max-price -1 \
		--labels="k8s.dask.org/dedicated=worker"
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

clean:
	az group delete -n $(GROUP)