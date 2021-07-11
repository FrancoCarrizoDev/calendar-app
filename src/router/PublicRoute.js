import { Route, Redirect } from "react-router-dom"
import PropTypes from "prop-types"

export const PublicRoute = ({ isLoggedIn, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

PublicRoute.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  component: PropTypes.object.isRequired
}
