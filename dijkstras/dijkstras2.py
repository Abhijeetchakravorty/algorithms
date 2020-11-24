import sys
class Graph:
        def __init__(self):
                self.vertices = {}
        
        def add_vertex(self, key):
                """Add a vertex with the given key"""
                vertex = Vertex(key)
                self.vertices[key] = vertex
        
        def get_vertex(self, key):
                """Return vertex object with the corresponding key"""
                return self.vertices[key]
        
        def __contains__(self, key):
                """Return vertex object with the corresponding key"""
                return key in self.vertices
        
        def add_edge(self, src_key, dest_key, weight=1):
                """Add edge from src_key to dest_key with given weight"""
                self.vertices[src_key].add_neighbour(self.vertices[dest_key], weight)
        
        def does_edge_exists(self, src_key, dest_key):
                """Return true if there is an edge from src_key to dest_key"""
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
                """Make this vertex point to dest with given edge weight"""
                self.points_to[dest] = weight
        
        def get_neighbours(self):
                return self.points_to.keys()
        
        def get_weight(self, dest):
                """Get weight if this vertex points to dest"""
                return self.points_to[dest]
        
        def does_it_point_to(self, dest):
                """Return true if this vertex points to dest"""
                return dest in self.points_to

def dijkstra(g, source):
        """Return distance where distance[b] is min distance from source to v

        this will return a dictionary distance

        g is a Graph object

        """

        unvisited = set(g)
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)

                for neighbour in closest.get_neighbours():
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

        option = int(input())
        if(option == 1):
                key = int(input("Please provide a vertex: "))
                if key not in g:
                        g.add_vertex(key)
                else:
                        print("Vertex already exists")
        elif option == 2:
                src = int(input("Please provide source: "))
                dest = int(input("Please provide destination: "))
                weight = int(input("Please provide weight: "))
                if src not in g:
                        print("Vertex {} does not exist".format(src))
                elif dest not in g:
                        print("Vertex {} does not exist".format(dest))
                else:
                        if not g.does_edge_exists(src, dest):
                                g.add_edge(src, dest, weight)
                                g.add_edge(dest, src, weight)
                        else:
                                print("Edge already exists")
        elif option==3:
                key = int(input("Please provide starting vertex: "))
                source = g.get_vertex(key)
                distance = dijkstra(g, source)
                print("Distance from {}: ".format(key))
                for v in distance:
                        print("Distance to {}: {}".format(v.get_key(), distance[v]))
                print()
        elif option==4:
                print("Vertices: ", end=" ")
                for v in g:
                        print(v.get_key(), end=" ")
                print()
                
                print("Edges: ")
                for v in g:
                        for dest in v.get_neighbours():
                                w = v.get_weight(dest)
                                print("(src={}, dest={}, weight={})".format(v.get_key(), dest.get_key(), w))
                print()
        else:
                print("Quit")
                sys.exit()