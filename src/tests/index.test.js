import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../server';

const expects = chai.expect;

chai.use(chaiHttp);

describe('/GET testing the root endpoint', () => {
    it('should return JSON object with status:200 and a message', (done) => {
        
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expects(res.status).to.equal(200);
                expects(res.body.message).to.equal('welcome to weather app');
                expects(res).to.be.a('object');
            done();
            })
    })
});