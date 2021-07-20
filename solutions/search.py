search = stac_client.search(
    collections=["sentinel-2-l2a"],
    bbox=label_item.bbox,
    datetime="2017-07-01/2017-09-01",
    limit=500,
)
items = search.get_all_items()
len(items)
