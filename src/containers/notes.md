Containers are a component that is meant to hold a collection of data and distribute that data however we need. These components often have a collection of methods that allow you to filter that data in different ways. 

i.e. 
our homepage needs to fetch recommended live streams on twitch for display purposes. 

Component structure would be: 
Home -> LiveStreamsContainer (meant to fetch and hold all live streams currently active) -> Stream Category (Computational Component) -> Individual Streams (Presentational Component)