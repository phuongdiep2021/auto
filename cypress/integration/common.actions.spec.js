import CommonActions from '../page-objects/CommonActions'

describe("Create course successfully", () => {

    // it('Launch course plan successfully', () => {
    //     const commonActions = new CommonActions();
    //     commonActions.navigateToCoursePlan()
    //     commonActions.verifyCoursePlanIsOpenSuccess()

    // });

    // it.only('Launch Resource Library Page successfully', () => {
    //     const commonActions = new CommonActions();
    //     commonActions.navigateToCResourceLibrary()
    //     commonActions.verifyResourcePageIsOpenSuccess()
    // });

    it('test login', () => {
       cy.launchCourse('vip@yopmail.com','CW-test4-Aug2602')
       cy.clickALinkText('My Course Plan')
    });



})