import { json } from 'body-parser';
import chai from 'chai';
import { loginFunction } from '../services/login'
import { protectFunction } from '../services/protected'

const expect = chai.expect;

describe('loginFunction()', () => {
  it('Returns a JWT token for valid credentials.', async () => {
    const username = 'admin';
    const password = 'secret';
    const token = await loginFunction(username, password);
    expect(token).to.be.string;
    expect(token).to.not.be.empty;
  });

  it('Returns an error object for invalid credentials.', async () => {
    const username = 'invaliduser';
    const password = 'invalidpassword';
    const result = await loginFunction(username, password);
    expect(result).to.have.property('status', 403);
    expect(result).to.have.property('error', 'Please enter a valid username and/or password');
  });

  it('Returns an error message if username is missing.', async () => {
    const username = undefined;
    const password = 'testpassword';
    const result = await loginFunction(username, password);
    expect(result).to.equal('Enter a valid password/username.');
  });

  it('Returns an error message if password is missing.', async () => {
    const username = 'testuser';
    const password = undefined;
    const result = await loginFunction(username, password);
    expect(result).to.equal('Enter a valid password/username.');
  });
});

describe('protectFunction()', function () {
  it('Tests token with admin\'s role payload.', function () {
    expect("You are under protected data").to.be.equal(protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NzY5NTEyMjJ9.Q2ZNGG6hbYN744ONrP-7oaP2Yu3-H3u6eoQXJ38UB5M"));
  });
  it('Tests token with noAdmin\'s role payload.', function () {
    expect("You are under protected data").to.be.equal(protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiZWRpdG9yIiwiaWF0IjoxNjc2OTU3MTY0fQ.IXnxjUqQjr5HJHXIOCnpuGWQpIotQOFauWxfDd6PHFg"));
  });
  it('Tests token with Bob\'s role payload.', function () {
    expect("You are under protected data").to.be.equal(protectFunction("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidmlld2VyIiwiaWF0IjoxNjc2OTU2NjU4fQ.LXZvXKcGSmgd3cy-biOulW62uaIM2DHeml6BgS4NI4I"));
  });
});
