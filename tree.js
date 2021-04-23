class tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=500;
		this.treeHeight=770;
		this.treeThickness=10;
		
		this.image=loadImage("Tree.jpg")
		this.bottomBody=Bodies.rectangle(this.x, this.y+50, this.treeWidth, this.treeThickness, {isStatic:true})
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,this.treeWidth, this.treeHeight)
			pop()
			
	}

}