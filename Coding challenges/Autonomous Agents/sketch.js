var canvasWidth = window.innerWidth;
var canvasHeight = window.innerHeight;

var numAgents = 1;
var agents = [numAgents];

function setup() {
	createCanvas(canvasWidth, canvasHeight);

	agents[0] = CreateAgent(
		{
			agentName:"chris",
			agentPosition:createVector(
				Math.random() * (window.innerWidth),
				Math.random() * (window.innerHeight),
			  ),
			agentIdleState: CreateAgentIdleState(),
			agentMoveToState: CreateAgentMoveToState()
		}
	);

	agents[0].beginAgentStateMachine();	
}

function draw() {
	background(51);

	for (var i = 0; i < agents.length; i++) {
		if (!(agents[i] === undefined)) {
			agents[i].updateAgent();
		}
	}
}

function GetArbitraryRelativePoint(positionVector, rangeVector){
	return createVector(
		Math.random() * (
			positionVector.x - rangeVector.x, 
			positionVector.x + rangeVector.x
		),
		Math.random() * (
			positionVector.y - rangeVector.y, 
			positionVector.y + rangeVector.y
		)
	  )
}