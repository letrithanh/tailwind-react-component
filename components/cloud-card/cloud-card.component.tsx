import React from "react";

export default class CloudCard extends React.Component {

    private getCloudAnimationStyle(speed: number) {
        const timeRunning = 16 * speed;
        return { animation: `cloud ${timeRunning}s linear infinite` };
    }

    private getCloud10AnimationStyle(speed: number) {
        const timeRunning = 16 * speed;
        return { animation: `cloud-10 ${timeRunning}s linear 1` };
    }

    private getCloud70AnimationStyle(speed: number) {
        const timeRunning = 16 * speed;
        return { animation: `cloud-70 ${timeRunning}s linear 1` };
    }

    render() {
        const backgroundImageStyle = {
            backgroundImage: `url(/images/mountain-cloud.jpg)`
        };

        return (
            <>
                <div className="w-full h-full overflow-hidden relative bg-no-repeat bg-cover bg-center" style={backgroundImageStyle}>
                    <img className={`absolute bottom-0`} src="/images/cloud1.png" style={this.getCloudAnimationStyle(2)} />
                    <img className={`absolute bottom-0`} src="/images/cloud1.png" style={this.getCloudAnimationStyle(3)} />
                    <img className={`absolute bottom-0 opacity-0`} src="/images/cloud2.png" style={this.getCloud70AnimationStyle(3)} />
                    <img className={`absolute bottom-0`} src="/images/cloud3.png" style={this.getCloudAnimationStyle(4)} />
                    <img className={`absolute bottom-0 opacity-0`} src="/images/cloud4.png" style={this.getCloud10AnimationStyle(3)} />
                    <img className={`absolute bottom-0`} src="/images/cloud5.png" style={this.getCloudAnimationStyle(5)} />
                    <img className={`absolute bottom-0`} src="/images/cloud5.png" style={this.getCloudAnimationStyle(6)} />
                </div>
            </>
        );
    }

}