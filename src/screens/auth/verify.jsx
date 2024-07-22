import { useContext } from "react";
import { HashLoader } from "react-spinners";
import { AuthContext } from "../../services/auth/auth.context";
import { VscError } from "react-icons/vsc";

const Verify = () => {
  const {
    isLoading,
    error,
    verify,
    setVerificationCode,
    verificationCode,
    resendVerificationCode,
  } = useContext(AuthContext);

  // const handleEmailVerification = () => {
  //   console.log(verificationCode);
  //   verifyCustomerEmail(verificationCode);
  // };

  return (
    <div className="verify">
      <div className="verifyContainer">
        <h2>Verification</h2>
        <div className="form-group">
          <label htmlFor="token">Enter Token</label>
          <input
            type="text"
            placeholder="token eg: 123456"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
        </div>

        <div className="resendToken">
          <p>Didn&apos;t get code?</p>
          <button onClick={resendVerificationCode}>Resend</button>
        </div>

        {error !== null && (
          <div className="authError">
            <VscError size={20} />
            {error}
          </div>
        )}

        <div className="buttonContainer">
          {isLoading ? (
            <HashLoader color={"#4678e4"} loading={isLoading} size={25} />
          ) : (
            <button onClick={verify}>submit</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Verify;
