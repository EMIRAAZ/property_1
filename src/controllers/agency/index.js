const { generateUniqueID } = require('../../utils');
const agencyService = require('./service');
const authRole = require('../../middleware/role');
const verify = require('../../middleware/verify-token');

async function listAgency(req, res) {
  const agencys = await agencyService.listAgencyService();
  return res.status(200).json({ status: 200, data: agencys });
}

async function addAgency(req, res) {
  const body = { ...req.body };

  const agencyBody = {
    id: generateUniqueID(),
    agencyName: body.agencyName,
    ...(body.agencyLogo ? { agencyLogo: body.agencyLogo } : {}),
  };

  const agency = await agencyService.addAmenityService(agencyBody);

  return res.status(201).json({
    status: 201,
    message: 'Agency added successfully',
    data: [agency],
  });
}

async function listAgencyById(req, res) {
  const { id } = req.params;

  const agency = await agencyService.listAgencyByIdService(id);
  return res.status(200).json({ status: 200, data: [agency] });
}

async function updateAgencyById(req, res) {
  const { id } = req.params;
  const body = { ...req.body };
  const agency = await agencyService.updateAgencyById(id, body);
  return res.status(200).json({
    status: 200,
    message: 'Successfully updated Agency',
    data: [agency],
  });
}

async function deleteAgencyById(req, res) {
  const { id } = req.params;
  await agencyService.deleteAgencyById(id);

  return res.status(200).json({
    status: 200,
    message: 'Successfully deleted Agency',
  });
}

module.exports = {
  listAgency: [verify, authRole(['ADMIN']), listAgency],
  addAgency: [verify, authRole(['ADMIN']), addAgency],
  listAgencyById: [verify, authRole(['ADMIN']), listAgencyById],
  updateAgencyById: [verify, authRole(['ADMIN']), updateAgencyById],
  deleteAgencyById: [verify, authRole(['ADMIN']), deleteAgencyById],
};
