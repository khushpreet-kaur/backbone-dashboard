/*var V_Labs = {
    Models: {},
    Collections: {},
    Views: {},
    Templates:{}
}*/


var Lab = Backbone.Model.extend({});

var Labs = Backbone.Collection.extend({
    model: Lab,
    url: "http://10.2.56.63:5000/labs",
    initialize: function() {
        console.log("Labs initialize");
    }
});



var LabsView = Backbone.View.extend({
	el: $('#test'),
    events: {
        'click li.labId': 'showlabs',
        // 'mouseover a': 'fooHovered'
    },
    initialize: function () {
    	this.main_template = _.template($('#labsview-root-template').html()),
    	this.lab_template = _.template($('#lab-model-template').html()),
        _.bindAll(this, "render");
         //this.collection.bind("reset", this.render);
    },
    render: function() {
        console.log("render") 
        console.log(this.collection.length);
        //$('#result').html('<table id="labs-table" class="table"></table>');
        //$('#labs-table').append('<tr><th>Lab ID</th> <th> Lab Name </th></tr>');
       	this.$el.html(this.main_template());

        
        this.collection.each(function(lab) {
            $('#labs-table').append(this.lab_template({
        		id: lab.get('lab_id'),
        		name: lab.get('name')
        	}));
            console.log("something")
        }, this);
    }
})

//new V_Labs.Views.Labs({collection: labs});


/*V_Labs.Router = Backbone.Router.extend({
    routes: {
        "": "defaultRoute" //file:///home/ambika/Desktop/backbone-dashboard/dashboard.html
    },
  
    defaultRoute: function () {
        console.log("defaultRoute");
        V_Labs.labs = new V_Labs.Collections.Labs()
        new V_Labs.Views.Labs({ collection: V_Labs.labs });
        V_Labs.labs.fetch();
        console.log(V_Labs.labs.length)
    }
})
 
var appRouter = new V_Labs.Router();
Backbone.history.start();*/

//var sample_labs = [{"developers": [], "discipline": {"dnc": "some name", "id": 1, "name": "CSE"}, "hosted_url": "http://virtual-labs.ac.in/labs/cse01/", "id": 1, "institute": {"coordinator": "some name", "id": 1, "integration_coordinator": "some other name", "name": "IIIT-H"}, "integration_level": 5, "is_auto_hostable": true, "is_content_avail": true, "is_deployed": true, "is_phase_2_lab": true, "is_simulation": true, "is_src_avail": true, "is_web_2_compliant": false, "lab_id": "ece04", "name": "electronics", "number_of_experiments": 9, "remarks": "Completed", "repo_url": "https://bitbucket.org/virtual-labs/cse01-ds_new", "slug": "ec", "status": "Hosted", "technologies": [], "type_of_lab": "Simulation"}, {"developers": [], "discipline": {"dnc": "some name", "id": 1, "name": "CSE"}, "hosted_url": "http://virtual-labs.ac.in/labs/cse01/", "id": 2, "institute": {"coordinator": "some name", "id": 1, "integration_coordinator": "some other name", "name": "IIIT-H"}, "integration_level": 5, "is_auto_hostable": true, "is_content_avail": true, "is_deployed": true, "is_phase_2_lab": true, "is_simulation": true, "is_src_avail": true, "is_web_2_compliant": false, "lab_id": "cse01", "name": "Data Structure", "number_of_experiments": 9, "remarks": "Completed", "repo_url": "https://bitbucket.org/virtual-labs/cse01-ds_new", "slug": "cse", "status": "Hosted", "technologies": [], "type_of_lab": "Simulation"}, {"developers": [], "discipline": {"dnc": "some name", "id": 3, "name": "ECE"}, "hosted_url": "http://virtual-labs.ac.in/labs/cse01/", "id": 3, "institute": {"coordinator": "cordinator", "id": 2, "integration_coordinator": "some other coordinator", "name": "IIT-D"}, "integration_level": 5, "is_auto_hostable": true, "is_content_avail": true, "is_deployed": true, "is_phase_2_lab": true, "is_simulation": true, "is_src_avail": true, "is_web_2_compliant": false, "lab_id": "cse01", "name": "Machines", "number_of_experiments": 9, "remarks": "Completed", "repo_url": "https://bitbucket.org/virtual-labs/cse01-ds_new", "slug": "cse", "status": "Hosted", "technologies": [], "type_of_lab": "Simulation"}];

// window.onload = function() {
	// console.log('initing dashboard');
    function showlabs(){
	var labs = new Labs();
	labs.fetch({success: function(coll, response, opts) {
	console.log('labs coll', labs);
	var labsview = new LabsView({collection: labs});
	console.log(labsview)
	labsview.render();
	},
	error: function(coll, resp, opts) {
		alert("Error retrieving labs info");
	}
	});
    console.log("exiting");
	
};

var FooView = Backbone.View.extend({
    el: $('#fooview'),
    events: {
        'click a.foo': 'fooClicked',
        'mouseover a': 'fooHovered'
    },
    initialize: function() {
        console.log('foo view initialize');
    },
    render: function() {
        console.log(this.$el);
        console.log('foo view render', this.collection);
        this.$el.append('I am Foo VIew!');
        this.collection.each(function(model) {
            this.$el.append("<div>Name: " + model.get('name') + "</div><div>Age: " + model.get('age')  + "</div>");
        }, this);
    },
    fooClicked: function() {
        console.log('foo clciked');
    },
    fooHovered: function() {
        console.log('foo hovered');
    }
});

var bar = new Backbone.Collection([{name: 'K', age: 22}, {name: 'A', age: 23}, {name: 'A', age: 32}]);
var fooview = new FooView({collection: bar});
fooview.render();