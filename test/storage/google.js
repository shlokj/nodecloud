const nodeCloud = require('../../lib');
const assert = chai.assert;		
const providers = require("../../lib/providers");		
const nodeCloud = require("../../lib");		
const nock = require("nock");	

const ncGoogle = nodeCloud.getProvider('google', {
  projectId: process.env.GCLOUD_PROJECT,
  keyFilename: process.env.GCLOUD_KEY_FILE_NAME,
});
const gceStorage = ncGoogle.storage();

describe('Google/GCP storage', () => {
  before(() => {});

  it('should create peristent disk', (done) => {
    const params = {};

    gceStorage.create(params).then((res) => {
      assert.equal(typeof res, 'object');
    });
  });
});

