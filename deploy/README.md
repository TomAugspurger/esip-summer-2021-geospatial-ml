# Deploy

Deploying a pangeo / Planetary-Computer-style JupyterHub on Azure for the ESIP Summer meeting workshop.

## Prerequisites

* An Azure subscription
* Helm
* A `secrets.yaml` file filled in. Use `secrets.yaml.example` as a template.

You'll also probably want to change the `dummy` authenticator to one of JupyterHub's [real authenticators](https://jupyterhub.readthedocs.io/en/stable/reference/authenticators.html).

```
$ make resource-group
$ make cluster
$ make hub
```

That'll get you a multi-user, Dask enabled hub up and running in 10-15 minutes.
