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

## Datasets

The label data comes from the Radiant Earth [South Africa Crop Type Competition](https://registry.mlhub.earth/10.34911/rdnt.j0co8q/) (CC-BY-4.0).

The satellite imagery is from [Sentinel-2](https://sentinel.esa.int/web/sentinel/missions/sentinel-2), accessed through the [Planetary Computer](https://planetarycomputer.microsoft.com/dataset/sentinel-2-l2a).