const CreateAgent = ({agentName, agentPosition, agentIdleState, agentMoveToState}) => ({
  agentName,
  agentPosition,
  agentIdleState,
  agentMoveToState,
  acceleration : createVector(0,0),
  velocity : createVector(0,0),
  currentState : null,
  beginAgentStateMachine : function(){
    this.agentIdleState.enterState(this);        
  },
  updateAgent : function () {
    //console.log(this.agentName + ' Updating State: ' + this.currentState);
    this.currentState.updateState(this);
    this.drawAgent();
  },
  drawAgent : function(){
    stroke("yellow");
    fill("blue");
    ellipse(this.agentPosition.x, this.agentPosition.y, 35, 45);
  }
});

CreateAgent.prototype.beingAgentStateMachine = function(){}