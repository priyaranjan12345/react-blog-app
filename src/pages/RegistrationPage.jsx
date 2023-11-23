import RegistrationForm from "../components/registration/RegistrationForm"
import { Provider } from "react-redux"
import stepperStore from "../store/store"

function RegistrationPage() {
    return (
        <div style={{ marginTop: '10%' }}>
            <Provider store={stepperStore}>
                <RegistrationForm />
            </Provider>
        </div>
    )
}

export default RegistrationPage