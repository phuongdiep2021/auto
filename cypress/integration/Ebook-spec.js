import LoginPage from '../page-objects/LoginPage'
import CoursePlanPage from '../page-objects/CoursePlanPage'
import ResourceLibraryPage from '../page-objects/ResourceLibrary.js/ResourceLibraryPage'
import EbookEditorPage from '../page-objects/ResourceLibrary.js/EbookEditorPage'
import CommonActions from '../page-objects/CommonActions';
//import Panel from '../page-objects/ReSourceLibrary.js/Panel'


//const resourceLibraryData = require('../data/ResourceLibrary.json');
const loginData = require('../data/Backdoor.json');
const backDoor = require('../data/Backdoor.json');
const resourceLibraryData = require('../data/ResourceLibrary.json');
//const ebookData = require('../../data/Ebook.json');

describe("Open Ebook Editor successfully", () => {
  const eBook = new EbookEditorPage()
  beforeEach(() => {
    const commonAction = new CommonActions();
    commonAction.navigateToCResourceLibrary()
    commonAction.verifyResourcePageIsOpenSuccess()
  })

  it.skip("Open My Book", () => {
    eBook.openMyBook('Fake Potter Ebook')
  })

  it("Open Ebook Editor successfully", () => {
    eBook.openEbookEditor()
    eBook.verifyEbookEditorOpenSuccess()
  })

  describe('Create an ebook assignment successfully', () => {
    const eBook = new EbookEditorPage()
    beforeEach(() => {
      const commonAction = new CommonActions();
      const ebook = new EbookEditorPage()
      commonAction.navigateToCResourceLibrary()
      ebook.openEbookEditor()
      eBook.verifyEbookEditorOpenSuccess()
    })

    it("", () => {
      eBook.openEbookEditor()
      eBook.verifyEbookEditorOpenSuccess()
    })


  });


})