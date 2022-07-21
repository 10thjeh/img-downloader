import requests

raw_link = ''
#read the images

with open('links.txt', 'r') as links:
    raw_link = links.readline()

sanitized_link = raw_link.replace('"', '')
img_list = sanitized_link.split(',')
counter = 1

for image in img_list:
    try:
        print("Downloading...(" + str(counter) + "/" + str(len(img_list)) + ")")
        img_data = requests.get(image).content
        with open(image[-8:], 'wb') as handler:
            handler.write(img_data)
    except Exception as e:
        print("An error happened while downloading image " + str(counter))
    finally:
        counter += 1

        
print("Job finished!")

