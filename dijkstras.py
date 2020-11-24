class Graph:
        def __init__(self):
                self.vertices = {}
        
        def add_vertex(self, key):
                """Add a vertex with the given key to the grap"""
                vertex = Vertex(key)
                self.vertices[key] = vertex
        
        def get_vertex(self, key):
                """Return vertex object with the corresponding key"""
                return self.vertices[key]
        
        def __contains__(self, key):
                return key in self.vertices
        
        def add_edge(self, src_key, dest_key, weight=1):
                """Add edge from src_key to dest_key with given weight"""
                self.vertices[src_key].add_neighbour(self.vertices[dest_key], weight)

        def does_edge_exist(self, src_key, dest_key):
                """Return True if there is an edge from src_key to dest_key."""
                return self.vertices[src_key].does_it_point_to(self.vertices[dest_key])
        
        def __iter__(self):
                return iter(self.vertices.values())

class Vertex:
        def __init__(self, key):
                self.key = key
                self.points_to = {}
        
        def get_key(self):
                """Return key corresponding to this vertex obejct"""
                return self.key
        
        def add_neighbour(self, dest, weight):
                """Make this vertex point to dest with given edge weight"""
                self.points_to[dest] = weight
        
        def get_neighbours(self):
                """Return all vertices pointed to by this vertex"""
                return self.points_to.keys()
        
        def get_weight(self, dest):
                """Get weight of edges from this vertex to dest."""
                return self.points_to[dest]
        
        def does_it_point_to(self, dest):
                """Return true if this vertex points to dest."""
                return dest in self.points_to

def dijkstra(g, source):
        """Return distance where distance[v] is mindistance from source to v.

        This will return a dictionary distance

        g is a Graph object

        source is a Vertex object in g/
        """

        unvisited = set(g)
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0


        while unvisited != set():
                #find vertex with minimum distance
                closest = min(unvisited, key=lambda v:distance[v])

                #mark as visited
                unvisited.remove(closest)

                #udpate distances
                for neighbour in closest.get_neighbours():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_weight(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance

        return distance

g = Graph()
print("Undirected graph")
print("Menu")
print("Add vertex <key>")
print("Add edge <src> <dest> <weight>")
print("shortest <source vertex key>")
print("display")
print("quit")

while True:
        do = input("What would you like to do? ").split()

        operation = do[0]
        if operation == "add":
                suboperation = do[1]
                if suboperation == "vertex":
                        key = int(do[2])
                        if key not in g:
                                g.add_vertex(key)
                        else:
                                print("Vertex already exists")
                elif suboperation == "edge":
                        src = int(do[2])
                        dest = int(do[3])
                        weight = int(do[4])
                        if src not in g:
                                print("Vertex {} does not exist".format(src))
                        elif dest not in g:
                                print('Vertex {} does not exist.'.format(dest))
                        else:
                                if not g.does_edge_exist(src, dest):
                                        g.add_edge(src, dest, weight)
                                        g.add_edge(dest, src, weight)
                                else:
                                        print("Edge already exists")
        elif operation == "shortest":
                key = int(do[1])
                source = g.get_vertex(key)
                distance = dijkstra(g, source)
                print("Distances from {}: ".format(key))
                for v in distance:
                        print("Distance to {}: {}".format(v.get_key(), distance[v]))
                print()
        elif operation == "display":
                print("Vertices: ", end=" ")
                for v in g:
                        print(v.get_key(), end=" ")
                print()

                print("Edges: ")
                for v in g:
                        for dest in v.get_neighbours():
                                w = v.get_wieght(dest)
                                print("(src={}, dest={}, weight={}".format(v.get_key(), dest.get_key(), w))
                
                print()
        elif operation == "2":
                break