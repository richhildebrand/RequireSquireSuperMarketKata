var require = {
    baseUrl: '../src',
    paths: {
        'Squire'          : '../spec/libs/Squire/Squire',
        'acceptanceTests' : '../spec/acceptanceTests',
        'unitTests'       : '../spec/unitTests',
    },
};

var expect = chai.expect;
 
mocha.setup({
    ui: 'bdd'
});

var runMocha = function() {
    mocha.run();
};
