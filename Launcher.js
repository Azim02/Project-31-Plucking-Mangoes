class Launcher{
	constructor(body,anchor)
	{
		
		var options={ 
			bodyA: body,			 
			pointB: anchor, 
			stiffness: 0.006, 
			length: 1
			
		}
		
		this.bodyA=body;
		this.pointB=anchor;

		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body)
	{
		this.launcher.bodyA = body;
	}

	fly()
	{
		this.launcher.bodyA = null;
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB;

			strokeWeight(2);		
			line(pointA.x+5,pointA.y+10,pointB.x+5,pointB.y+10);
		}
	}
}