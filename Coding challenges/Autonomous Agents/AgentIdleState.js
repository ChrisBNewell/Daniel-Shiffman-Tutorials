function CreateAgentIdleState(){
  return {
      idlelocation : null,
      idleDestination : null,
      idleRange : createVector(10, 10),
      timeSinceLastIdleMove: 0,
      idleMoveTimer : 5,
      idleDestinationArrivalRange : .1,
      IdleMoveSpeed : .2,
      enterState : function(agent) {
        //set the state's idle location to the agent's current location.
        this.idlelocation = agent.agentPosition;

        console.log("idlelocation: " + this.idlelocation);

        //find a new idle destination.
        this.idleDestination = createVector(
          Math.random() * (
            this.idlelocation.x - this.idleRange.x, 
            this.idlelocation.x + this.idleRange.x
          ),
          Math.random() * (
            this.idlelocation.y - this.idleRange.y, 
            this.idlelocation.y + this.idleRange.y
          )
        );
        
        console.log("idleDestination: " + this.idleDestination);

        //set the agent's state to this state
        agent.currentState = this;
      },
      exitState : function(agent, nextState) {
        //do something before we leave this state.
        timeSinceLastIdleMove = 0;
        idleDestination = null;
        idlelocation = null;
        //call enterState() on the next state
        nextState.enterState();
      },
      updateState : function(agent){
        this.idleMove(agent);
      },
      idleMove : function(agent){
        if (this.idleDestination != null){
          //if we have not reached our idle destination, move towards it.
          var distance = dist(
                              this.idlelocation.x, this.idlelocation.y,
                              this.idleDestination.x, this.idleDestination.y
                            );
          ellipse(this.idleDestination.x, this.idleDestination.y, 25, 25);
          //console.log("idleDestination: " + this.idleDestination);
          // if (distance >= this.idleDestinationArrivalRange) {
          //   console.log('distance: ' + distance);
          //   //get the direction from our agent's position to the idleDestination.
          //   //(x2 - x1, y2 - y1)
            var direction = createVector(
              this.idleDestination.x - agent.agentPosition.x,
              this.idleDestination.y - agent.agentPosition.y
            );
          //   agent.agentPosition += direction.normalize() * this.IdleMoveSpeed;
          // }
        }
        else{
          //check to see if enough time has passed to move the agent to a new idle location.
          if (this.idleMoveTimer > this.timeSinceLastIdleMove) {
            this.timeSinceLastIdleMove += .1;
          }
          else{
            //if we do not have an idle destination,
            //pick a idle destination from the idle location plus or minus the idle range and move towards it.
            this.idleDestination = createVector(
                      Math.random(
                        this.idlelocation.x - this.idleRange.x, 
                        this.idlelocation.x + this.idleRange.x
                      ),
                      Math.random(
                        this.idlelocation.y - this.idleRange.y, 
                        this.idlelocation.y + this.idleRange.y
                      )
                    );
          }
        }
      }
    }
}
