import React, { Component } from "react";
import Model from "./Model";
import "./BaiTapThuKinh.css";

var Background = "./img/glassesImage/background.jpg";
var sectionStyle = {
	backgroundImage: `url(${Background})`,
	backgroundSize: "2000px",
	minHeight: "2000px",
};

export default class BaiTapThuKinh extends Component {
	glassesData = [
		{
			id: 1,
			price: 30,
			name: "GUCCI G8850U",
			url: "./img/glassesImage/v1.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 2,
			price: 50,
			name: "GUCCI G8759H",
			url: "./img/glassesImage/v2.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 3,
			price: 30,
			name: "DIOR D6700HQ",
			url: "./img/glassesImage/v3.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 4,
			price: 70,
			name: "DIOR D6005U",
			url: "./img/glassesImage/v4.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 5,
			price: 40,
			name: "PRADA P8750",
			url: "./img/glassesImage/v5.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 6,
			price: 60,
			name: "PRADA P9700",
			url: "./img/glassesImage/v6.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 7,
			price: 80,
			name: "FENDI F8750",
			url: "./img/glassesImage/v7.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 8,
			price: 100,
			name: "FENDI F8500",
			url: "./img/glassesImage/v8.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
		{
			id: 9,
			price: 60,
			name: "FENDI F4300",
			url: "./img/glassesImage/v9.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
	];
	state = {
		glasses: {
			id: 2,
			price: 50,
			name: "GUCCI G8759H",
			url: "./img/glassesImage/v2.png",
			desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
		},
	};
	handleChangeGlasses = (id) => {
		this.glassesData.forEach((glasses) => {
			if (glasses.id == id) {
				this.setState({
					glasses: glasses,
				});
			}
		});
	};
	handleRenderGlasses = () => {
		return this.glassesData.map((glasses) => {
			return (
				<img
					onClick={() => {
						this.handleChangeGlasses(glasses.id);
					}}
					style={{ width: "110px", cursor: "pointer" }}
					src={glasses.url}
					alt='...'
					className='ml-2 p-2 border border-width-1'
				/>
			);
		});
	};
	render() {
		return (
			<div style={sectionStyle}>
				<div
					style={{
						backgroundColor: "rgba(0, 0, 0, 0.8)",
						minHeight: "2000px",
					}}>
					<h3
						className='text-center text-light p-5'
						style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}>
						TRY GLASSES APP ONLINE
					</h3>
					<div className='container'>
						<div className='row mt-5 text-center'>
							<div className='col-6 '>
								<div className='modelLeft'>
									<Model />
									<img
										className='glassesStyle'
										src={this.state.glasses.url}
										alt='...'
									/>
									<div className='info'>
										<span className='header'>{this.state.glasses.name}</span>
										<span className='description'>
											{this.state.glasses.desc}
										</span>
									</div>
								</div>
							</div>
							<div className='col-6 modelRight'>
								<Model />
							</div>
						</div>
					</div>
					<div className='bg-light container text-center mt-5 d-flex justify-content-center p-5 glasses'>
						{this.handleRenderGlasses()}
					</div>
				</div>
			</div>
		);
	}
}
