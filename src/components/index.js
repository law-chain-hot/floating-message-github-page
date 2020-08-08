import App from './App'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
    return { authenticated: state.auth.authenticated }
}

export default connect(mapStateToProps)(App)