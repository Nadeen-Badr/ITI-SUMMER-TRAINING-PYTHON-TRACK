import json

class Queue:
    def __init__(self):
        self.items = []

    def insert(self, value):
        self.items.append(value)

    def pop(self):
        if self.is_empty():
            print("Warning: Queue is empty.")
            return None
        return self.items.pop(0)

    def is_empty(self):
        return len(self.items) == 0

class NamedQueue(Queue):
    queues = {}

    def __init__(self, name, size):
        super().__init__()
        self.name = name
        self.max_size = size
        NamedQueue.queues[name] = self

    def insert(self, value):
         if len(self.items) >= self.max_size:
            print("Queue is full.")
         else:
            super().insert(value)
    @classmethod
    def save(cls, filename):
        # Convert the queues dictionary to a JSON-compatible format
        queues_json = {}
        for name, queue in cls.queues.items():
            queues_json[name] = {
                "max_size": queue.max_size,
                "items": queue.items
            }

        # Write the JSON data to a file
        with open(filename, "w") as f:
            json.dump(queues_json, f)

    @classmethod
    def load(cls, filename):
        # Load the JSON data from the file
        with open(filename, "r") as f:
            queues_json = json.load(f)

        # Convert the JSON data to queue instances
        for name, queue_data in queues_json.items():
            queue = NamedQueue(name, queue_data["max_size"])
            queue.items = queue_data["items"]

        return cls.queues



#test cases
#part 1 ---------------------------------
# Create a new named queue
q1 = NamedQueue("queue1", 5)
# Insert values into the queue
q1.insert(1)
q1.insert(2)
q1.insert(3)
# Pop values from the queue
print(q1.pop())
print(q1.pop())
# Check if q1 is empty
print(q1.is_empty())  # Output: False
#part 2 ---------------------------------

#A)the queue should have a name that is provided as a parameter of its constructor
print("Queue name:", q1.name)
print("Queue size:", q1.max_size)
#B)
# Create a new named queue with a small size
q4 = NamedQueue("queue4", 2)

# Try to insert more values than the queue's size

q4.insert(1)
q4.insert(2)
q4.insert(3)
#this outputs queue is full
#C)The queue keeps track with all queues instances that has been created through this class and we can get any queue of them using its name
q4_retrieved = NamedQueue.queues["queue4"]
print(q4_retrieved.items)

#bonus part-----------------------
q6 = NamedQueue("queue6", 5)
q6.insert(1)
q6.insert(2)
q6.insert(3)
q6.save("queues.json")
q6.load("queues.json")



