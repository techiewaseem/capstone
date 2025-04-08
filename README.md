**Steps to Run the Project**
Download the Dataset:
The dataset for San Francisco is available in the dataset branch of the main repository. You can access it from the following link:
	https://github.com/techiewaseem/capstone/tree/dataset

**Place Data Files:**
Keep all the data files in the same folder as the other project files.

**Compile the Project:**
To compile the project, run the following command:   
	g++ -O3 -std=c++11 realtime_simulation.cpp Hungarian.cpp

This will generate the a.out file.

**Run the Simulation:**
To run the simulation, use the following command:
	./a.out [location=SF] [alpha=1.3] [route={dij|dag|dex}] [maxDepth=0.2] [assign={hun|pxa}] [maxCab=2000] [cabCapacity={2|3}] [Optional: starttime endtime]

**Explanation of Parameters:**

	Location: SF for San Francisco.
	
	Alpha: Percentage amount of extra distance allowed compared to the shortest path.
	
	Route: Type of route recommendation algorithm. Options:
	
	dij: Dijkstra (Shortest Path)
	
	dag: Dynamic Programming on a DAG
	
	dex: Dynamic Programming on a DAG with back edges
	
	Max Depth: Maximum length for reverse edges in the DAG.
	
	Assign: Assignment algorithm for free cabs. Options:
	
	hun: Hungarian Algorithm
	
	pxa: Greedy Price Assignment Algorithm
	
	MaxCab: Maximum number of cabs running in the city.
	
	Cab Capacity: Maximum number of passengers in a cab.
	
	Optional: Start time and end time of the simulation.
 


Example Command:
./a.out SF 1.2 dex 0.3 hun 4000 3 480 570

Detailed definitions of variables are available in the referenced paper.

