import './CardDesktop.sass'

const CardDesktop = () => {
    return (
        <article className="container">
            <span className="title">Please select one color</span>
            <div className="ball-options">
                <div className="ball-option never">
                    <input value="male" name="gender" type="radio" />
                    <div className="circle"></div>
                    <div className="circle-inner"></div>
                </div>

                <div className="ball-option male">
                    <input value="male" name="gender" type="radio" />
                    <div className="circle"></div>
                    <div className="circle-inner"></div>
                </div>

                <div className="ball-option female">
                    <input value="female" name="gender" type="radio" />
                    <div className="circle"></div>
                    <div className="circle-inner"></div>
                </div>

                <div className="ball-option non-binary">
                    <input value="non-binary" name="gender" type="radio" />
                    <div className="circle"></div>
                    <div className="circle-inner"></div>
                </div>

                <div className="ball-option none">
                    <input value="none" name="gender" type="radio" />
                    <div className="circle"></div>
                    <div className="circle-inner"></div>
                </div>
            </div>
        </article>
    )
}

export default CardDesktop
