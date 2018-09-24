/*
    ***** BEGIN LICENSE BLOCK *****
    
    Copyright © 2011 Center for History and New Media
                     George Mason University, Fairfax, Virginia, USA
                     http://zotero.org
    
    This file is part of Zotero.
    
    Zotero is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    
    Zotero is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.
    
    You should have received a copy of the GNU Affero General Public License
    along with Zotero.  If not, see <http://www.gnu.org/licenses/>.
    
    ***** END LICENSE BLOCK *****
*/

window.ZOTERO_CONFIG = {
	REPOSITORY_URL: 'https://www.zotero.org/repo',
	REPOSITORY_CHECK_INTERVAL: 86400, // 24 hours
	REPOSITORY_RETRY_INTERVAL: 3600, // 1 hour
	REPOSITORY_CHANNEL: 'trunk',
	BASE_URI: 'http://zotero.org/',
	WWW_BASE_URL: 'http://staging.zotero.net/',
	API_URL: 'https://apidev.zotero.org/',
	LOGIN_URL: 'https://staging.zotero.net/user/login?bm=1',
	BOOKMARKLET_ORIGIN : 'https://staging.zotero.net',
	BOOKMARKLET_URL: 'https://staging.zotero.net/bookmarklet/',
	AUTH_COMPLETE_URL: 'https://staging.zotero.net/bookmarklet/auth_complete.html',
	S3_URL: 'https://zoterofilestorage.s3.amazonaws.com/'
};
Zotero.isBookmarklet = true;
Zotero.isBrowserExt = false;
