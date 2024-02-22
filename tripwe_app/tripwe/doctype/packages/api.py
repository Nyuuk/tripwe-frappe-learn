import frappe

@frappe.whitelist()
def get_package_list() :
    return frappe.db.get_list("Packages")