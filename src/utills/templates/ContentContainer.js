import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import HomePanel from '../../home/templates/HomePanel';
import ChineseFoodPanel from '../../chinese_food/templates/ChineseFoodPanel'
import routes from '../../utills/datas/routes';
import ForeignFoodPanel from '../../foreign_food/templates/ForeignFoodPanel';
import RestaurantPanel from '../../restaurant/templates/RestaurantPanel';
import RestaurantDetailPanel from '../../restaurant/templates/RestaurantDetailPanel';
import CookPanel from '../../cook/templates/CookPanel';
import FoodDetailPanel from '../../cook/templates/FoodDetailPanel';
import HealthPanel from '../../health/templates/HealthPanel';
import SearchPanel from '../../search/templates/SearchPanel';
import LoginPanel from '../../login/templates/LoginPanel';

export default class ContentContainer extends Component {
  static propTypes = {
    handleLogin: PropTypes.func.isRequired,
    handleSignUp: PropTypes.func.isRequired,
    handleSelectedPageChange: PropTypes.func.isRequired,
    signUpedUsers: PropTypes.array.isRequired,
  }

  render() {
    const { handleLogin,
      handleSignUp,
      signUpedUsers,
      handleSelectedPageChange } = this.props

    return (
      <div style={{
        margin: '0 40px'
      }}>
        <Switch>
          {/* 首页 */}
          <Route exact path={routes.home.path} render={() => (
            <HomePanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 中国美食 */}
          <Route exact path={routes.chinese_food.path} render={() => (
            <ChineseFoodPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 外国美食 */}
          <Route exact path={routes.foreign_food.path} render={() => (
            <ForeignFoodPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 推荐餐厅 */}
          <Route exact path={routes.restaurant.path} render={() => (
            <RestaurantPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 推荐餐厅详情页 */}
          <Route exact path={routes.restaurant.path + '/0'} render={() => (
            <RestaurantDetailPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 食材烹饪 */}
          <Route exact path={routes.cook.path} render={() => (
            <CookPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 食材烹饪详情页 */}
          <Route exact path={routes.cook.path + '/food/0'} render={() => (
            <FoodDetailPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 饮食健康 */}
          <Route exact path={routes.health.path} render={() => (
            <HealthPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 搜索结果页 */}
          <Route exact path='/search' render={() => (
            <SearchPanel
              handleSelectedPageChange={handleSelectedPageChange}
            />
          )} />
          {/* 登录页 */}
          <Route exact path='/login' render={({ history }) => (
            <LoginPanel
              handleLogin={handleLogin}
              signUpedUsers={signUpedUsers}
              history={history}
              handleSignUp={handleSignUp}
            />
          )} />

          {/* 404 */}
          <Redirect to='/404' />
        </Switch>
      </div>
    )
  }
}
