import sys
class Vertex:
        def __init__(self, key):
                self.key = key
                self.points_to = {}
        
        def get_key(self):
                return self.key
        
        def set_weight(self, key, weight):
                self.points_to[key] = weight
        
        def get_neighbour(self):
                return self.points_to.keys()
        
        def does_point_to(self, dest):
                return dest in self.points_to
        
        def get_weight(self, dest):
                return self.points_to[dest]
        
class Graph:
        def __init__(self):
                self.vertices = {}

        def __contains__(self, key):
                return key in self.vertices
        
        def __iter__(self):
                return iter(self.vertices.values())
        
        def get_vertex(self, key):
                return self.vertices[key]
        
        def set_vertex(self, key):
                vertex = Vertex(key)
                self.vertices[key] = vertex
        
        def set_edge(self, src_key, dest_key, weight=1):
                self.vertices[src_key].set_weight(self.vertices[dest_key], weight)
        
        def has_edge(self, src_key, dest_key):
                return self.vertices[src_key].doees_point_to(self.vertices[dest_key])


def dijkstras(g, source):
        unvisited = set(g)
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)

                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_weight(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

g = Graph()
while True:
        print("Choose an option: ")
        print("1. Add vertex")
        print("2. Add edges")
        print("3. Shortest")
        print("4. Display")
        print("5. Press 5 or any other key to exit")


