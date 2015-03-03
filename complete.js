// Labs List View
var Lab = Backbone.Model.extend({});

var Labs = Backbone.Collection.extend({
    model: Lab,
    url: " http://10.2.56.63:5000/labs",
    initialize: function() {
        console.log("Labs initialize");
    }
});

var LabsView = Backbone.View.extend({
	el: $('#test'),
    initialize: function () {
    	this.main_template = _.template($('#labsview-root-template').html()),
    	this.lab_template = _.template($('#lab-model-template').html()),
        _.bindAll(this, "render");
    },
    render: function(){
        console.log("render") 
        console.log(this.collection.length);
       	this.$el.html(this.main_template());
        this.collection.each(function(lab) {
        console.log(this);
        $('#labs-table').append(this.lab_template({
                id: lab.get('lab_id'),
        		name: lab.get('name')
        	}));
        }, this);
    }
})

function showLabs() {
    // alert("something")
    console.log('initing dashboard');
    var labs = new Labs();
    labs.fetch({
        success: function(coll, response, opts) {
            console.log('labs coll', labs);
            var labsview = new LabsView({collection: labs});
            console.log(labsview)
            labsview.render();
        },
        error: function(coll, resp, opts) {
         alert("Error retrieving labs info");
        }
    });
}



// Institutes List View
var Institute = Backbone.Model.extend({});

var Institutes = Backbone.Collection.extend({
    model: Institute,
    url: " http://10.2.56.63:5000/institutes",
    initialize: function() {
        console.log("Institutes initialize");
    }
});

var InstitutesView = Backbone.View.extend({
    el: $('#test'),
    initialize: function () {
        alert("inside initialize");
        this.main_template = _.template($('#institutesview-root-template').html()),
        this.institute_template = _.template($('#institute-model-template').html()),
        _.bindAll(this, "render");
    },
    render: function(){
        console.log("render") 
        console.log(this.collection.length);
        this.$el.html(this.main_template());
        this.collection.each(function(institute) {
            console.log(this);
            $('#institutes-table').append(this.institute_template({
                name: institute.get('name')
            }));
        }, this);
    }
})

function institutes() {
    console.log('initing dashboard');
    var institutes = new Institutes();
    console.log(institutes);
    institutes.fetch({
        success: function(coll, response, opts) {
            console.log('institutes coll', institutes);
            var institutesview = new InstitutesView({collection: institutes});
            console.log(institutesview)
            institutesview.render();
        },
        error: function(coll, resp, opts) {
            console.log("Error retrieving institutes info");
        }
    });
}



// Disciplines List View
var Discipline = Backbone.Model.extend({});

var Disciplines = Backbone.Collection.extend({
    model: Discipline,
    url: " http://10.2.56.63:5000/disciplines",
    initialize: function() {
        console.log("Disciplines initialize");
    }
});

var DisciplineView = Backbone.View.extend({
    el: $('#test'),
    initialize: function () {
        this.main_template = _.template($('#disciplinesview-root-template').html()),
        this.discipline_template = _.template($('#discipline-model-template').html()),
        _.bindAll(this, "render");
    },
    render:function(){
        console.log("render") 
        console.log(this.collection.length);
        this.$el.html(this.main_template());
        this.collection.each(function(lab) {
            console.log(this);
            $('#dsiciplines-table').append(this.discipline_template({
                name: discipline.get('name')
            }));
        }, this);
    }
})

function disciplines() {
    console.log('iniating dashboard');
    var disciplines = new Disciplines();
    disciplines.fetch({success: function(coll, response, opts) {
    console.log('disciplines coll', disciplines);
    var disciplinesview = new DisciplinesView({collection: Disciplines});
    console.log(disciplinesview)
    disciplinesview.render();
    },
    error: function(coll, resp, opts) {
        alert("Error retrieving disciplines info");
    }
    });
}



// Developers List View
var Developer = Backbone.Model.extend({});

var Developers = Backbone.Collection.extend({
    model: Developer,
    url: " http://10.2.56.63:5000/developers",
    initialize: function() {
        console.log("Developers initialize");
    }
});

var DeveloperView = Backbone.View.extend({
    el: $('#test'),
    initialize: function () {
        this.main_template = _.template($('#developersview-root-template').html()),
        this.discipline_template = _.template($('#developer-model-template').html()),
        _.bindAll(this, "render");
    },
    render:function(){
        console.log("render") 
        console.log(this.collection.length);
        this.$el.html(this.main_template());
        this.collection.each(function(lab) {
            console.log(this);
            $('#developers-table').append(this.developer_template({
                institutename: developer.get('institute_name'),
                developername: developer.get('developer_name'),
                emailid: developer.get('email_id')
            }));
        }, this);
    }
})

function developers() {
    console.log('iniating dashboard');
    var developers = new Developers();
    developers.fetch({success: function(coll, response, opts) {
    console.log('developers coll', developers);
    var developersview = new DevelopersView({collection: Developers});
    console.log(developersview)
    developersview.render();
    },
    error: function(coll, resp, opts) {
        alert("Error retrieving developers info");
    }
    });
}



// Technologies List View
var Technology = Backbone.Model.extend({});

var Technologies = Backbone.Collection.extend({
    model: Technology,
    url: " http://10.2.56.63:5000/technologies",
    initialize: function() {
        console.log("Technologies initialize");
    }
});

var TechnologiesView = Backbone.View.extend({
    el: $('#test'),
    initialize: function () {
        this.main_template = _.template($('#technologyview-root-template').html()),
        this.technology_template = _.template($('#technology-model-template').html()),
        _.bindAll(this, "render");
    },
    render: function(){
        console.log("render") 
        console.log(this.collection.length);
        this.$el.html(this.main_template());
        this.collection.each(function(technology) {
            console.log(this);
            $('#technologies-table').append(this.technology_template({
                id: technology.get('id'),
                name: technology.get('name'),
                foss: technology.get('foss')
            }));
        }, this);
    }
})

function technologies() {
    console.log('initing dashboard');
    var technologies = new Technologies();
    technologies.fetch({
        success: function(coll, response, opts) {
            console.log('technologies coll', technologies);
            var technologiesview = new TechnologiesView({collection: technologies});
            console.log(technologiesview)
            technologiesview.render();
        },
        error: function(coll, resp, opts) {
            alert("Error retrieving technologies info");
        }
    });
}