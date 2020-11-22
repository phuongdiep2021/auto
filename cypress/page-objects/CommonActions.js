import CourseBuilderPage from '../page-objects/CourseBuilderPage'
const backDoor = require('../data/Backdoor.json')
//const courseBuilderPage = new CourseBuilderPage()

const linkReturnToCourseSetup = ':nth-child(2) > div > strong'
const btnAlertSubmit = '#c-els-modal__button-RETURN_TO_COURSE_BUILDER_MODAL--alert'

//Action menu
const btnMenu = 'div.o-els-flex-layout--center .c-els-menu .o-els-icon-svg'
const menuRemove = 'ul.c-els-menu__list > li:nth-of-type(12) > span:nth-of-type(1) span:nth-of-type(1)'
const actionMenu = '.c-els-menu__window'
const menuSelector = '.c-els-menu__list'


//Confirm dialogs
const confirmRemoveItem = 'div#c-els-modal__content-REMOVE_MODAL_ID .c-els-button--primary'

const btnOpenCourseSetup = '.o-els-container > div > .c-els-button'


class CommonActions {
createManualCourse(firstFolderTitle){
    this.selectManualBuildCourse()
    this.changeFirstFolderTitle(firstFolderTitle)
    cy.get(btnCreateCourse).click()
}

verifyCourseCreateSuccess(){
    cy.url().should('contain','course-plan')
}

returnToCourseSetup(){
    cy.get(linkReturnToCourseSetup).click()
    cy.get(btnAlertSubmit).click()
    cy.url().should('contain','course-builder')
}

confirmRemoveItem(){
    cy.get(confirmRemoveItem).click
  }

  deleteFirstFolder(){
    cy.get(btnMenu).click()
    cy.get(actionMenu).should('be.visible').find(menuRemove).click()
    this.confirmRemoveItem()
    this.openCourseSetup()
  }

  openCourseSetup(){
    cy.get(btnOpenCourseSetup).click

  }

  createAutoCourse(){
    this.selectAutoBuildCourse()
    this.unselectAddDateRange()
    cy.get(btnCreateCourse).click()
}


}

export default CommonActions;