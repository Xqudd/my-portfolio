import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default function CodeBlock({ language }) {
  return (
    <SyntaxHighlighter
      language={language}
      style={oneDark}
      customStyle={{
        borderRadius: "0.5rem",
        padding: "1rem",
        fontSize: "0.85rem",
        maxHeight: "300px", 
        overflow: "auto",   
      }}
    >
      {`#General Code Used for the above images
#This is a smiley face, but the star and money are very similar
from neopixel import Neopixel
import time


pixels = Neopixel(256, 0, 28, "GRB")
#                (numpix,#,#, formattype)

#brightness
b = 0.01

#colors
red = (255*b, 0*b, 0*b)
green = (0*b , 255*b, 0*b)
blue = (0*b,0*b, 255*b)
yellow = (255*b,255*b, 153*b)
black = (0,0,0)
orange = (255*b,165*b, 0*b)
brown = (165*b,42*b, 42*b)
gray =(105*b,105*b, 105*b)


cols, rows = (16,16)





#making array that is mapped to led layout
light= [[0 for i in range(cols)] for j in range(rows)]
k = 0
for i in range(cols):
    for j in range(rows):
            light[i][j] = k
            k +=1

for i in range(8):
    for r in range(rows):
            k= i*2
            light[k].sort(reverse =True)
a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p = (1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16)      

#print array for testing purposes
#print(light)

#access light with format light[row][column]


#changing leds row by row
Cols = []
#row 0
for i in Cols:
    pixels.set_pixel(light[0][i], red)
    pixels.show()

Cols = [2,6]
#row 1
for i in Cols:
    pixels.set_pixel(light[1][i], red)
    pixels.show()

Cols = [2,6]
#row 2
for i in Cols:
    pixels.set_pixel(light[2][i], red)
    pixels.show()

Cols = []
#row 3
for i in Cols:
    pixels.set_pixel(light[3][i], red)
    pixels.show()
 
Cols = [1,7]
#row 4
for i in Cols:
    pixels.set_pixel(light[4][i], red)
    pixels.show()
    
Cols = [2,3,5,6]
#row 5
for i in Cols:
    pixels.set_pixel(light[5][i], red)
    pixels.show()
    
Cols = [3,4,5]
#row 6
for i in Cols:
    pixels.set_pixel(light[6][i], red)
    pixels.show()
    
Cols = []
#row 7
for i in Cols:
    pixels.set_pixel(light[7][i], red)
    pixels.show()
    
Cols = []
#row 8
for i in Cols:
    pixels.set_pixel(light[8][i], red)
    pixels.show()

Cols = []
#row 9
for i in Cols:
    pixels.set_pixel(light[9][i], red)
    pixels.show()

Cols = []
#row 10
for i in Cols:
    pixels.set_pixel(light[10][i], red)
    pixels.show()

Cols = []
#row 11
for i in Cols:
    pixels.set_pixel(light[11][i], red)
    pixels.show()

Cols = []
#row 12
for i in Cols:
    pixels.set_pixel(light[12][i], red)
    pixels.show()

Cols = []
#row 13
for i in Cols:
    pixels.set_pixel(light[13][i], red)
    pixels.show()

Cols = []
#row 14
for i in Cols:
    pixels.set_pixel(light[14][i], red)
    pixels.show()

Cols = []
#row 15
for i in Cols:
    pixels.set_pixel(light[15][i], red)
    pixels.show()`}
    </SyntaxHighlighter>
  );
}
