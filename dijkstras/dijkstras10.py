def dijkstras(g, source):
        unvisited = set() """ Creating an object """
        distance = dict.fromkeys(g, float('inf')) """ setting max value for distance """
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

def dijkstras(g, source):
        unvisited = set() """ Create an object """
        distance = dict.fromkeys(g, float('inf')) """ set max value """

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

def dijkstras(g, source):
        unvisited = set()
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

def dijkstras(g, source):
        unvisited = set() #create an object
        distance = dict.fromkeys(g, float('inf')) #set max value
        distance[source] = 0 #set distance.source = 0 
        while unvisited != set(): #loop until unvisited is empty object
                closest = min(unvisited, key=lambda v:distance[v]) #set closest value as min value
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_weight(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
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

def dijkstras(g, source):
        unvisited = set()
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

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0 

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest]+closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))

        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, key=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, keys=lambda v:distance[v])
                unvisited.remove(closest)
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        distance[neighbour] = new_distance
        return distance

def dijkstras(g, source):
        unvisited = set()
        distance = dict.fromkeys(g, float('inf'))
        distance[source] = 0

        while unvisited != set():
                closest = min(unvisited, keys=lambda v:distance[v])
                unvisited.remove(closest)
                
                for neighbour in closest.get_neighbour():
                        if neighbour in unvisited:
                                new_distance = distance[closest] + closest.get_neighbour(neighbour)
                                if distance[neighbour] > new_distance:
                                        
