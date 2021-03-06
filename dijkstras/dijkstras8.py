import sys
class Graph:
        def __init__(self):
                self.vertices = {}
        
        def __contains__(self, key):
                return key in self.vertices
        
        def __iter__(self):
                return iter(self.vertices.values())
        
        def set_vertex(self, key):
                vertex = Vertex(key)
                self.vertices[key] = vertex

        def get_vertex(self, key):
                return self.vertices[key]
        
        def set_edge(self, src_key, dest_key, weight=1):
                self.vertices[src_key].set_neighbour(self.vertices[dest_key], weight)
        
        def has_edge(self, src_key, dest_key):
                return self.vertices[src_key].does_points_to(self.vertices[dest_key])
        
class Vertex:
        def __init__(self, key):
                self.key = key
                self.points_to = {}
        
        def get_key(self, key):
                return self.key
        
        def set_neighbour(self, dest_key, weight):
                self.points_to[dest_key] = weight
        
        def get_neighbours(self):
                return self.points_to.keys()
        
        def does_points_to(self, key):
                return key in self.points_to
        
        def get_weight(self, key):
                return self.points_to[key]
        
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
        print("1. Add Vertex")
        print("2. Add edges")
        print("3. Shortest")
        print("4. Display")
        print("5. Press 5 or any other key to exit")

        option = int(input())
        if option==1:
                key = int(input("Please provide vertex: "))
                if key not in g:
                        g.set_vertex(key)
                else:
                        print("Vertex already exists")
        elif option==2:
                src = int(input("Please provide source: "))
                dest = int(input("Please provide destination: "))
                weight = int(input("Please provide weight: "))
                if src not in g:
                        print("Vertex {} does not exist".format(src))
                elif dest not in g:
                        print("Vertex {} does not exist".format(dest))
                else:
                        if not g.has_edge(src, dest):
                                g.set_edge(src, dest, weight)
                                g.set_edge(dest, src, weight)
                        else:
                                print("Edge already exists")
        elif option==3:
                key = int(input("Please provide starting vertex: "))
                source = g.get_vertex(key)
                distance = dijkstras(g, source)
                print("Distance from {}:".format(key))
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
                        for dest in v.get_neighbour():
                                w = v.get_weight(dest)
                                print("(src={}, dest={}, weight={}".format(v.get_key(), dest.get_key(), w))
                print()
        else:
                print("Quit")
                sys.exit()