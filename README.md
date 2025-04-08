**Overview:**

This directory contains the dataset used for running the simulation in the Capstone Ride Sharing project. The dataset is specifically for San Francisco (SF) and is used to predict hotspots during different times of the day and help improve driver efficiency in the ride-sharing system. The data now includes gender-specific ride data and represents a smaller area of San Francisco for easier testing and simulation.

**SF Dataset Details:**

The San Francisco dataset used in the simulation includes historical ride data, and it now includes gender-based preferences (denoted as "M" for male and "F" for female) in the sf_output file. The dataset covers a compact region of San Francisco for ease of simulation.

**Files Included:**

  sfIndex: Index file for the San Francisco dataset.
  
  sfIndex.deg: Contains the degree information for the vertices in the graph representation of the city.
  
  sfIndex.labelin: Labeling information for the inbound edges in the city map.
  
  sfIndex.labelout: Labeling information for the outbound edges in the city map.
  
  sf_edge: Edge data representing the connections between locations in San Francisco.
  
  sf_location: Contains the geographic locations of various points in San Francisco.
  
  sf_output: The main dataset file containing ride information, including passenger gender (M/F), pickup and dropoff locations, timestamps, and other ride details.

**Key Features**
Gender Preferences: The sf_output file includes gender-specific preferences for passengers. This allows for implementing gender-based ride-sharing, ensuring passengers with similar preferences are matched together.

**Compact Map:** The dataset represents a smaller, simplified map of San Francisco, focusing on key areas to simulate the ride-sharing system more efficiently.
