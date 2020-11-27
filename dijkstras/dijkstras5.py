import sys
class Vertex:
        def __init__(self, key):
                self.key = key
                self.points_to = {}
        
        def set_neighbours(self, dest, weight):
                self.points_to[dest] = weight
        
        def get_neighbours(self):
                return self.points_to.keys()
        
        def does_point_to(self, dest):
                return dest in self.points_to
        
        def get_key(self):
                return self.key

        def get_weight(self, dest):
                return self.points_to[dest]

class Graph:
        def __init__(self):
                self.vertices = {}
        
        def __iter__(self):
                return iter
        
        def __contains__(self, key):
                return key in self.vertices
        
        def set_vertex(self, key):
                vertex = Vertex(key)
        
        def get_vertex(self, key):
                return self.vertices[key]
        
        def set_edge(self, src_key, dest_key, weight=1):
                self.vertices[src_key].set_neighbours(self.vertices[dest_key], weight)

        def edge_exists(self, src_key, dest_key):
                return self.vertices[src_key].does_point_to[self.vertices[self.dest_key]]


def dijkstras(g, source):
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
        print("3. Shortes")
        print("4. Display")
        print("5. Press 5 or any other key to exit")

        option = int(input())
        if (option==1):
                key = int(input("Please provide vertex: "))
                if key not in g:
                        g.set_vertex(key)
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
                        for dest in v.get_neighbours():
                                w = v.get_weight(dest)
                                print("(src={}, dest={}, weight={}".format(v.get_key(), dest.get_key(), w))
                print()
        else:
                print("Quit")
                sys.exit()