function insertBrochureDownloadForm() {
    return `
								<div class="widget-content"
									style="background-image:url('../images/resource/service-15.jpg')">
									<h5>Download our informative brochure:</h5>
									<div id="contact-container" style="margin-top:25px;" class="contact-form">
										<form method="post" id="FormBrochure" novalidate="novalidate">
											<div class="contact-form">
												<input type="hidden" id="RequestType" name="RequestType"
													value="Brochure Request">
												<div class="form-group">
													<label for="Name">First &amp; Last Name</label>
													<input type="text" name="Name" class="form-control">
												</div>
												<div class="form-group">
													<label for="Email"> Email </label>
													<input type="text" name="Email" class="form-control">
												</div>
												<div class="form-group">
													<label for="Subject"> I'm most interested in: </label>
													<select name="Subject" class="form-control">
														<option value="General Info">General Information Request
														</option>
														<option value="MTNs"> MTNs </option>
														<option value="PPPs"> PPPs </option>
													</select>
												</div>
												<div class="form-group">
													<label for="Messages"> Message </label>
													<textarea class="form-control" name="Messages"></textarea>
												</div>
												<div style="display: none;" class="form-group">
													<input type="text" name="subscribe_edd5b5af3550_40114"
														class="form-control">
												</div>
												<div class="form-group">
													<button
														style="width:100%;padding:0;line-height:35px;color:white;background-color:#7e6a46;cursor:pointer;border-radius:3px;"
														type="submit" onclick="return Utes.Form.Post(this)">
														Submit
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
    `;
}