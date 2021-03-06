/*!
 * Copyright 2014 Apereo Foundation (AF) Licensed under the
 * Educational Community License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may
 * obtain a copy of the License at
 *
 *     http://opensource.org/licenses/ECL-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an "AS IS"
 * BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

import * as RestUtil from './util';

/**
 * Crop the large picture that is associated with a user.
 *
 * @param  {RestContext}     restCtx                 Standard REST Context object that contains the current tenant URL and the current user credentials
 * @param  {String}          principalId             The ID of the principal we're trying to crop a picture for.
 * @param  {Object}          selectedArea            The topleft coordinates and size of the square that should be cropped out
 * @param  {Number}          selectedArea.x          The top left x coordinate.
 * @param  {Number}          selectedArea.y          The top left y coordinate.
 * @param  {Number}          selectedArea.width      The width of the square
 * @param  {Function}        callback                Standard callback method takes argument `err`
 * @param  {Object}          callback.err            Error object containing error code and error message
 * @param  {Object}          callback.principal      The updated principal object
 */

const cropPicture = (restCtx, principalId, selectedArea, callback) => {
  const params = {
    principalId,
    x: selectedArea.x,
    y: selectedArea.y,
    width: selectedArea.width
  };
  RestUtil.performRestRequest(restCtx, '/api/crop', 'POST', params, callback);
};

export { cropPicture };
