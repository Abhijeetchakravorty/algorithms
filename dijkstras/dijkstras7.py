import sys
class Vertex:
        def __init__(self, key):
                self.key = key
                self.points_to = {}

        def get_key(self):
                return self.key
        
        def get_weight(self, dest):
                return self.points_to[dest]
        
        def get_neighbour(self):
                return self.points_to.keys()
        
        def set_neighbour(self, dest, weight):
                self.points_to[dest]=weight

        def does_point_to(self, dest):
                return dest in self.points_to

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
                self.vertices[src_key].add_neighbour(self.vertices[dest_key], weight)
        
        def has_edge(self, src_key, dest_key):
                return self.vertices[src_key].does_point_to(self.vertices[dest_key])
        
def dijkstras():
