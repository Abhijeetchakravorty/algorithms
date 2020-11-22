import sys
class Graph:
        def __init__(self):
                self.vertices = {}
        
        def __contains__(self, key):
                """Return vertex object with the corresponding key"""

        def add_vertex(self, key):
                """Add a vertex with the given key"""
                vertex = Vertex(key)
                self.vertices[key] = vertex
        
        def get_vertex(self, key):
                """Return vertex object with the corresponding key"""
                return self.vertices[key]
        def add_edge(self, src_key, dest_key, weight=1):
                """Add edge from src_key to dest_key with given weight"""
                self.vertices[src_key].add_neighbour(self.vertices[dest_key], weight)
        def does_edge_exits(self, src_key, dest_key):
                """Return True if there is an edge from src_key to dest_key"""
                return self.vertices[src_key].does_it_point_to(self.vertices[dest_key])
        def __iter__(self):
                return iter(self.vertices.values())

class Vertex:
        def __init__(self, key):
                self.key = key
                self.points_to = {}
        
        def get_key(self):
                """Return key corresponding to this vertex object"""
                return self.key
        
        def add_neighbour(self, dest, weight):
                """Make this vertex point to dest with given edggge weight"""
                self.points_to[dest] = weight
        
        def get_neighbours(self):
                return self.points_to.keys()
        
        def get_weight(self, dest):
                """Get weight if this vertex points to dest"""
                return dest in self.points_to

def dijkstras(g, source):
        """Return distance where distance[b] is mindistance from source to v

        This will return a  dictionary distance

        g is a Graph object

        source is a Vertex object in g/

        """

        unvisited = set(g)
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest= min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)

                for neighbour in closest.get_neighbours():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_weight(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance


g = Graph()
while True:
        print("1. Add vertex")
        print("2. Add edges")
        print("3. Quit")

        option = int(input())
        if (option == 1):
                key = int(input("Please provide vertex: "))
                if key not in g:
                        print("I am adding vertex as: ", key)
                        g.add_vertex(key)
                else:
                        print("Vertex already exists")
        elif option == 2:
                print("Adding edges")
        else:
                print("Quit")
                sys.exit()