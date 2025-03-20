import { Injectable } from '@angular/core';
import { Role } from '../model/Role';
import { Permission } from '../model/Permission';
import { UserData } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class RolepermissionserviceService {

  constructor() { }


  private roles: Role[] = [
    new Role('Admin', [
      new Permission('createUser', 'Create new user'),
      new Permission('editUser', 'Edit user'),
      new Permission('deleteUser', 'Delete user'),
      new Permission('viewUser', 'View user'),
    ]),
    new Role('Editor', [
      new Permission('editUser', 'Edit user'),
      new Permission('viewUser', 'View user'),
    ]),
    new Role('Viewer', [
      new Permission('viewUser', 'View user'),
    ])
  ];

  // Check if a user has the given permission
  hasPermission(user: UserData, permissionName: string): boolean {
    const userRole = this.getUserRole(user);
    if (!userRole) {
      return false;
    }

    const permission = userRole.permissions.find(p => p.permissionName === permissionName);
    return permission !== undefined;
  }

  // Get the Role of a user based on their role name
  private getUserRole(user: UserData): Role | undefined {
    return this.roles.find(role => role.roleName === user.securityRoles[0]); // Assuming the user has one role
  }
}
