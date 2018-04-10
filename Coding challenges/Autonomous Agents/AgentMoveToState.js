function CreateAgentMoveToState(){
  return {
      idleDestination : createVector(0, 0),
      enterState : function(agent) {
        //do stuff

        //set the agent's state to this state
        agent.currentState = this;
      },
      exitState : function(agent, nextState) {
        //do something before we leave this state.

        //call enterState() on the next state
        nextState.enterState();
      },
      updateState : function(agent){
        this.moveToDestination();
      },
      moveToDestination : function(agent){
        //move us closer to the destination

        //if we reach the destination, put us back in idle State
        this.exitState(agent, agent.agentIdleState);
      }
    }
}
