from itertools import count
from turtle import onclick


turn=0

boxArray=list()
for i in range(0,6):
    boxArray.append(list());

class Box:
    player={0:"green",1:"red"}
    def __init__ (self,name=None,row=None,col=None):
        self.name=name
        self.row=row
        self.col=col
        self.count=0
    def __str__(self) -> str:
        return f"{self.name[0]} {self.row} {self.col}"
        
    def capture(self,row,col):
        if(boxArray[row][col].name==self.name):
            boxArray[row][col].
        else:
            return
    def capture(self):
        count+=1
        onclick()

    def onclick(self):
        if (self.name != Box.player[turn%2]):
            print("Worng cord")
            return
        else:self.count+=1;

        if(self.count>=2):
            #coreners
            if((self.row in [0,5]) or (self.col in [0,5])):
                if(self.row == 0 or self.row == 5)and(self.col == 0 or self.col == 5) and count == 2:
                    if(self.row == 0):
                        if(self.col==0):
                            self.capture(row=self.row+1,col=self.col)
                            self.capture(row=self.row,col=self.col+1)
                        elif(self.col==5):
                            self.capture(row=self.row+1,col=self.col)
                            self.capture(row=self.row,col=self.col-1)
                    if(self.row == 5):
                        if(self.col==0):
                            self.capture(row=self.row-1,col=self.col)
                            self.capture(row=self.row,col=self.col+1)
                        elif(self.col==5):
                            self.capture(row=self.row-1,col=self.col)
                            self.capture(row=self.row,col=self.col-1)
                    
                elif( self.row in range(1,5) or self.col in range(1,5)) and (count == 3):
                    if(self.row==0):
                        self.capture(row=self.row+1,col=self.col)
                        self.capture(row=self.row,col=self.col+1)
                        self.capture(row=self.row+1,col=self.col-1)
                    elif(self.col==0):
                        self.capture(row=self.row+1,col=self.col)
                        self.capture(row=self.row,col=self.col+1)
                        self.capture(row=self.row+1,col=self.col-1)
                        
            elif(self.row in range(1,5) and self.col in range(1,5)) and count == 4:
                pass
    
    

