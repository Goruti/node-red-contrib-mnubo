module.exports = function(RED) { 
   
   RED.nodes.registerType("mnubo config", MnuboConfigNode, {
      credentials: {
         id: {type: 'text'},
         secret: {type: 'password'},
         access_token: {type: 'password'},
         access_token_expiry: {type: 'text'},
      }
   });
   
   function MnuboConfigNode(thisNode) {
      RED.nodes.createNode(this,thisNode);
      this.name = thisNode.name;
      this.env = thisNode.env;
      this.proxy_url = thisNode.proxy_url;
      this.retries = new Boolean(thisNode.retries)
      this.numberOfAttempts = thisNode.numberOfAttempts;
      this.initialDelayInMillis = thisNode.initialDelayInMillis;
   }
}
