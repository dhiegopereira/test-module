const files = require('./files')
const expect = require('chai').expect
const fs = require('fs')
const sinon = require("sinon");

describe('success reading directory', () => {
  const path = './'
    afterEach(done => {
        fs.readdir.restore()
        done()
    })
    it('reading directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, cb) => {
            cb(null, ['file1.txt'])
        })
      
        return files.readdir(path).then( list => {
            expect(list.length).to.equal(1)
            expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })
    })
    it('fails reading directory', () => {
        sinon.stub(fs, 'readdir').callsFake((path, cb) => {
            cb('error')
        })      
        return files.readdir(path)
            .catch( err => {
              expect(err).to.equal('error')
              expect(fs.readdir.getCall(0).args[0]).to.equal(path)
        })
    })

})
