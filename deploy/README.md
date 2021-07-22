# Deploy

Deploying a pangeo / Planetary-Computer-style JupyterHub on Azure for the ESIP Summer meeting workshop.
This is a mostly standard [daskhub](https://github.com/dask/helm-chart/tree/main/daskhub) deployment, except we provided GPUs for the users.

## Prerequisites

* An Azure subscription
* [Helm](https://helm.sh/)
* A `secrets.yaml` file filled in. Use `secrets.yaml.example` as a template.

## Authentication

We used the `dummy` authenticator for the workshop. You'll also probably want use one of JupyterHub's [real authenticators](https://jupyterhub.readthedocs.io/en/stable/reference/authenticators.html).

## Helm configuration

There are a few azure specific things in the configuration

* `jupyterhub.proxy.service.annotations.service.beta.kubernetes.io/azure-dns-label-name`: Set this is you want to use AKS's automatic domain name feature. Otherwise, just delete it.
* `jupyterhub.proxy.hosts`: Set this to your hub URL

## Deployment

```
$ make resource-group
$ make cluster
$ make hub
$ make userpools
$ NODE_COUNT=1 make scale  # your number of users
```

That'll get you a multi-user, Dask enabled hub up and running in 10-15 minutes.
