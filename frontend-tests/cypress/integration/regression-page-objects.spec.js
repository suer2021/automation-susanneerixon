/// <reference types="cypress" />

import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as roomsFuncs from '../pages/roomsPage'
import * as newroomFuncs from '../pages/newRoomPage'
import * as targets from '../targets/targets'
import faker from 'faker'

describe('Test suite', function(){

    beforeEach(()=>{
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOfIndexPage(cy)
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    })

    afterEach(()=>{
        dashboardFuncs.performLogout(cy, 'Login')
    })
    // Test case
    //it('Perform login and logout', function(){
    //    indexFuncs.performValidLogin(cy, targets.username, targets.password, 'Tester Hotel Overview')
    //    dashboardFuncs.performLogout(cy, 'Login')
    //})

    it('Create Room', function(){
        dashboardFuncs.navigateToRoomPage(cy, 'Rooms')
        roomsFuncs.navigateToNewRoomPage(cy, 'New Room')
        newroomFuncs.saveNewRoom()
        roomsFuncs.navigateToDashboardPage(cy, 'Tester Hotel Overview')
    })

})